
const express = require('express')
import {handler294} from "./handler294";
const app = express()
app.get('/294', handler294)
app.listen(3000, () => {})
        