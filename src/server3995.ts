
const express = require('express')
import {handler3995} from "./handler3995";
const app = express()
app.get('/3995', handler3995)
app.listen(3000, () => {})
        