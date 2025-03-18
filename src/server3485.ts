
const express = require('express')
import {handler3485} from "./handler3485";
const app = express()
app.get('/3485', handler3485)
app.listen(3000, () => {})
        