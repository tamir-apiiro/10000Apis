
const express = require('express')
import {handler3502} from "./handler3502";
const app = express()
app.get('/3502', handler3502)
app.listen(3000, () => {})
        