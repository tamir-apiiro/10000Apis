
const express = require('express')
import {handler3470} from "./handler3470";
const app = express()
app.get('/3470', handler3470)
app.listen(3000, () => {})
        