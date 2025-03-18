
const express = require('express')
import {handler1959} from "./handler1959";
const app = express()
app.get('/1959', handler1959)
app.listen(3000, () => {})
        