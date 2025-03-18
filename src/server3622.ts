
const express = require('express')
import {handler3622} from "./handler3622";
const app = express()
app.get('/3622', handler3622)
app.listen(3000, () => {})
        