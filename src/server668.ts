
const express = require('express')
import {handler668} from "./handler668";
const app = express()
app.get('/668', handler668)
app.listen(3000, () => {})
        