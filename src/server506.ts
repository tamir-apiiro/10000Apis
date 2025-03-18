
const express = require('express')
import {handler506} from "./handler506";
const app = express()
app.get('/506', handler506)
app.listen(3000, () => {})
        