
const express = require('express')
import {handler2433} from "./handler2433";
const app = express()
app.get('/2433', handler2433)
app.listen(3000, () => {})
        