
const express = require('express')
import {handler3497} from "./handler3497";
const app = express()
app.get('/3497', handler3497)
app.listen(3000, () => {})
        