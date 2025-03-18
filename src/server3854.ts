
const express = require('express')
import {handler3854} from "./handler3854";
const app = express()
app.get('/3854', handler3854)
app.listen(3000, () => {})
        