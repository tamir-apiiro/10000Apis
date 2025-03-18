
const express = require('express')
import {handler3134} from "./handler3134";
const app = express()
app.get('/3134', handler3134)
app.listen(3000, () => {})
        