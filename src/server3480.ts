
const express = require('express')
import {handler3480} from "./handler3480";
const app = express()
app.get('/3480', handler3480)
app.listen(3000, () => {})
        