
const express = require('express')
import {handler3873} from "./handler3873";
const app = express()
app.get('/3873', handler3873)
app.listen(3000, () => {})
        