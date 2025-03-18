
const express = require('express')
import {handler3878} from "./handler3878";
const app = express()
app.get('/3878', handler3878)
app.listen(3000, () => {})
        