
const express = require('express')
import {handler3831} from "./handler3831";
const app = express()
app.get('/3831', handler3831)
app.listen(3000, () => {})
        