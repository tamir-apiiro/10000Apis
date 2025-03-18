
const express = require('express')
import {handler3363} from "./handler3363";
const app = express()
app.get('/3363', handler3363)
app.listen(3000, () => {})
        