
const express = require('express')
import {handler3433} from "./handler3433";
const app = express()
app.get('/3433', handler3433)
app.listen(3000, () => {})
        