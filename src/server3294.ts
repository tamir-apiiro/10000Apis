
const express = require('express')
import {handler3294} from "./handler3294";
const app = express()
app.get('/3294', handler3294)
app.listen(3000, () => {})
        