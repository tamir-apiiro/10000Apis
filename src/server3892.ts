
const express = require('express')
import {handler3892} from "./handler3892";
const app = express()
app.get('/3892', handler3892)
app.listen(3000, () => {})
        