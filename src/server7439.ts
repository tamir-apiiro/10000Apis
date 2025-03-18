
const express = require('express')
import {handler7439} from "./handler7439";
const app = express()
app.get('/7439', handler7439)
app.listen(3000, () => {})
        