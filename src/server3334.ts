
const express = require('express')
import {handler3334} from "./handler3334";
const app = express()
app.get('/3334', handler3334)
app.listen(3000, () => {})
        