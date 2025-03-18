
const express = require('express')
import {handler7519} from "./handler7519";
const app = express()
app.get('/7519', handler7519)
app.listen(3000, () => {})
        