
const express = require('express')
import {handler3937} from "./handler3937";
const app = express()
app.get('/3937', handler3937)
app.listen(3000, () => {})
        