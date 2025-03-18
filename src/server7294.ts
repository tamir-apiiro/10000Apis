
const express = require('express')
import {handler7294} from "./handler7294";
const app = express()
app.get('/7294', handler7294)
app.listen(3000, () => {})
        