
const express = require('express')
import {handler3006} from "./handler3006";
const app = express()
app.get('/3006', handler3006)
app.listen(3000, () => {})
        