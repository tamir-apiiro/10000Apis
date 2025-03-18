
const express = require('express')
import {handler3902} from "./handler3902";
const app = express()
app.get('/3902', handler3902)
app.listen(3000, () => {})
        