
const express = require('express')
import {handler3946} from "./handler3946";
const app = express()
app.get('/3946', handler3946)
app.listen(3000, () => {})
        