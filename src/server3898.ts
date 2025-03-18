
const express = require('express')
import {handler3898} from "./handler3898";
const app = express()
app.get('/3898', handler3898)
app.listen(3000, () => {})
        