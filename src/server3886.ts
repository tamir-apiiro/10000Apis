
const express = require('express')
import {handler3886} from "./handler3886";
const app = express()
app.get('/3886', handler3886)
app.listen(3000, () => {})
        