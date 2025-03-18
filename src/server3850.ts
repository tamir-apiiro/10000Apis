
const express = require('express')
import {handler3850} from "./handler3850";
const app = express()
app.get('/3850', handler3850)
app.listen(3000, () => {})
        