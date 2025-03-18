
const express = require('express')
import {handler3784} from "./handler3784";
const app = express()
app.get('/3784', handler3784)
app.listen(3000, () => {})
        