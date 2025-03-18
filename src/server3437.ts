
const express = require('express')
import {handler3437} from "./handler3437";
const app = express()
app.get('/3437', handler3437)
app.listen(3000, () => {})
        