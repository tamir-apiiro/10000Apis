
const express = require('express')
import {handler4162} from "./handler4162";
const app = express()
app.get('/4162', handler4162)
app.listen(3000, () => {})
        