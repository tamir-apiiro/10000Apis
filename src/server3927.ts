
const express = require('express')
import {handler3927} from "./handler3927";
const app = express()
app.get('/3927', handler3927)
app.listen(3000, () => {})
        