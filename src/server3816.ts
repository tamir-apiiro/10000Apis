
const express = require('express')
import {handler3816} from "./handler3816";
const app = express()
app.get('/3816', handler3816)
app.listen(3000, () => {})
        