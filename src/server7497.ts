
const express = require('express')
import {handler7497} from "./handler7497";
const app = express()
app.get('/7497', handler7497)
app.listen(3000, () => {})
        