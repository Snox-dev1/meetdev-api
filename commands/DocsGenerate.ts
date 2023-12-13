import { BaseCommand } from '@adonisjs/core/build/standalone'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '../config/swagger'
export default class DocsGenerate extends BaseCommand {
  public static commandName = 'docs:generate'

  public static description = ''

  public static settings = {
    loadApp: true,

    stayAlive: false,
  }

  public async run() {
    const Router = this.application.container.use('Adonis/Core/Route')
    Router.commit()
    await AutoSwagger.writeFile(Router.toJSON(), swagger)
  }
}
