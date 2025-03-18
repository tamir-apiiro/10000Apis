
const express = require('express')
import {handler4738} from "./handler4738";
const app = express()
app.get('/4738', handler4738)
app.listen(3000, () => {})
        