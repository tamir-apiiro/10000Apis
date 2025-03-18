
const express = require('express')
import {handler3048} from "./handler3048";
const app = express()
app.get('/3048', handler3048)
app.listen(3000, () => {})
        