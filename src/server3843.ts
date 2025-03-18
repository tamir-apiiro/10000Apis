
const express = require('express')
import {handler3843} from "./handler3843";
const app = express()
app.get('/3843', handler3843)
app.listen(3000, () => {})
        