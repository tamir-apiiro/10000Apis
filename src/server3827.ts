
const express = require('express')
import {handler3827} from "./handler3827";
const app = express()
app.get('/3827', handler3827)
app.listen(3000, () => {})
        