
const express = require('express')
import {handler3296} from "./handler3296";
const app = express()
app.get('/3296', handler3296)
app.listen(3000, () => {})
        