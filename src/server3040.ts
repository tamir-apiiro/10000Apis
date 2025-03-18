
const express = require('express')
import {handler3040} from "./handler3040";
const app = express()
app.get('/3040', handler3040)
app.listen(3000, () => {})
        