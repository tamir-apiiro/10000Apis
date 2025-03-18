
const express = require('express')
import {handler3207} from "./handler3207";
const app = express()
app.get('/3207', handler3207)
app.listen(3000, () => {})
        