
const express = require('express')
import {handler3932} from "./handler3932";
const app = express()
app.get('/3932', handler3932)
app.listen(3000, () => {})
        