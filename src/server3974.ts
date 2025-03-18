
const express = require('express')
import {handler3974} from "./handler3974";
const app = express()
app.get('/3974', handler3974)
app.listen(3000, () => {})
        