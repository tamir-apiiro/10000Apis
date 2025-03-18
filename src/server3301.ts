
const express = require('express')
import {handler3301} from "./handler3301";
const app = express()
app.get('/3301', handler3301)
app.listen(3000, () => {})
        