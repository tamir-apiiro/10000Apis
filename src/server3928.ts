
const express = require('express')
import {handler3928} from "./handler3928";
const app = express()
app.get('/3928', handler3928)
app.listen(3000, () => {})
        