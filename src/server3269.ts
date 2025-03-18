
const express = require('express')
import {handler3269} from "./handler3269";
const app = express()
app.get('/3269', handler3269)
app.listen(3000, () => {})
        