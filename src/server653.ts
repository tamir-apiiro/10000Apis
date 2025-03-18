
const express = require('express')
import {handler653} from "./handler653";
const app = express()
app.get('/653', handler653)
app.listen(3000, () => {})
        