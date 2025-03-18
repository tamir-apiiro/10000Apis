
const express = require('express')
import {handler398} from "./handler398";
const app = express()
app.get('/398', handler398)
app.listen(3000, () => {})
        