
const express = require('express')
import {handler3908} from "./handler3908";
const app = express()
app.get('/3908', handler3908)
app.listen(3000, () => {})
        